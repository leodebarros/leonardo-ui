import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  View as RNView,
  ViewStyle,
  Animated,
} from "react-native";
import { useTheme } from "./Theme";
import { Text } from "./Text";
import { useThemeActions } from "@/store/themeContext";
import Svg, { Circle } from "react-native-svg";

export type ProgressType = "primary" | "success" | "warning" | "default";
export type ProgressSize = "sm" | "md" | "lg";

interface BaseProgressProps {
  value: number; // 0-100
  label?: string;
  type?: ProgressType;
  showValue?: boolean;
  style?: StyleProp<ViewStyle>;
}

function getProgressColor(
  type: ProgressType,
  theme: any,
  chosenPrimaryKey?: string
) {
  switch (type) {
    case "success":
      return theme.colors.success;
    case "warning":
      return theme.colors.destructive;
    case "default":
      return theme.colors.antiOverBackground;
    case "primary":
    default:
      return chosenPrimaryKey;
  }
}

function Progress() {
  return null;
}

interface LinearProgressProps extends BaseProgressProps {
  size?: ProgressSize;
}

Progress.Linear = function Linear({
  value,
  label,
  type = "primary",
  size = "md",
  showValue = false,
  style,
}: LinearProgressProps) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();
  const animatedWidth = React.useRef(new Animated.Value(0)).current;
  const clampedValue = Math.max(0, Math.min(100, value));

  React.useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: clampedValue,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [clampedValue]);

  const getHeight = () => {
    switch (size) {
      case "sm":
        return 4;
      case "lg":
        return 12;
      case "md":
      default:
        return 8;
    }
  };

  const width = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      marginBottom: theme.margin.md,
    },
    labelContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: theme.margin.xs,
    },
    progressContainer: {
      height: getHeight(),
      backgroundColor: theme.colors.surface,
      borderRadius: getHeight() / 2,
      overflow: "hidden",
    },
    progressBar: {
      height: "100%",
      backgroundColor: getProgressColor(type, theme, chosenPrimaryKey),
      borderRadius: getHeight() / 2,
    },
  });

  return (
    <RNView style={[styles.container, style]}>
      {(label || showValue) && (
        <RNView style={styles.labelContainer}>
          {label && (
            <Text size="sm" color="textSecondary">
              {label}
            </Text>
          )}
          {showValue && (
            <Text size="sm" color="textSecondary" weight="bold">
              {clampedValue}%
            </Text>
          )}
        </RNView>
      )}

      <RNView style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width }]} />
      </RNView>
    </RNView>
  );
};

// Circular Progress Subcomponent
interface CircularProgressProps extends BaseProgressProps {
  size?: number;
  thickness?: number;
}

Progress.Circular = function Circular({
  value,
  size = 80,
  thickness = 8,
  label,
  type = "primary",
  showValue = true,
  style,
}: CircularProgressProps) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const clampedValue = Math.max(0, Math.min(100, value));

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: clampedValue,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [clampedValue]);

  // Calculate SVG values
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const halfSize = size / 2;

  // Animated stroke dash offset
  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      justifyContent: "center",
      alignItems: "center",
    },
    svg: {
      transform: [{ rotateZ: "-90deg" }],
    },
    contentContainer: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      fontSize: size * 0.13,
      marginTop: theme.margin.sm,
    },
    value: {
      fontSize: size * 0.18,
    },
  });

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <RNView style={[styles.container, style]}>
      <Svg width={size} height={size} style={styles.svg}>
        {/* Background circle */}
        <Circle
          cx={halfSize}
          cy={halfSize}
          r={radius}
          stroke={theme.colors.surface}
          strokeWidth={thickness}
          fill="none"
        />

        {/* Foreground animated circle */}
        <AnimatedCircle
          cx={halfSize}
          cy={halfSize}
          r={radius}
          stroke={getProgressColor(type, theme, chosenPrimaryKey)}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>

      {/* Center content */}
      <RNView style={styles.contentContainer}>
        {showValue && (
          <Text weight="bold" style={styles.value}>
            {clampedValue}%
          </Text>
        )}
        {label && (
          <Text color="textSecondary" style={styles.label}>
            {label}
          </Text>
        )}
      </RNView>
    </RNView>
  );
};

export default Progress;
