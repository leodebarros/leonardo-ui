import React from "react";
import {
  View as DefaultView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "./Theme";
import { Text } from "./Text";

export type FeaturedTone =
  | "green"
  | "yellow"
  | "cyan"
  | "red"
  | "purple"
  | "blue";

interface Tone {
  themeColor: string;
  titleColor: string;
  subtitleColor: string;
}

const toneColors: Record<FeaturedTone | "blue", Tone> = {
  blue: {
    themeColor: "rgb(15, 40, 112)",
    titleColor: "#e9f6ff",
    subtitleColor: "#b6dfff",
  },
  green: {
    themeColor: "rgb(22, 101, 52)",
    titleColor: "#ecfdf5",
    subtitleColor: "#a7f3d0",
  },
  yellow: {
    themeColor: "rgb(133, 77, 14)",
    titleColor: "#fffbeb",
    subtitleColor: "#fef08a",
  },
  cyan: {
    themeColor: "rgb(8, 145, 178)",
    titleColor: "#ecfeff",
    subtitleColor: "#a5f3fc",
  },
  red: {
    themeColor: "rgb(153, 27, 27)",
    titleColor: "#fef2f2",
    subtitleColor: "#fecaca",
  },
  purple: {
    themeColor: "rgb(88, 28, 135)",
    titleColor: "#faf5ff",
    subtitleColor: "#e9d5ff",
  },
};

interface FeaturedProps {
  title: string;
  subtitle: string;
  buttonCaption: string;
  imageAddress: ImageSourcePropType;
  tone?: FeaturedTone | Tone;
}

const Featured = ({
  title,
  subtitle,
  buttonCaption,
  imageAddress,
  tone = "blue",
}: FeaturedProps) => {
  const theme = useTheme();

  let toneObject: Tone;
  if (typeof tone === "string") {
    toneObject = toneColors[tone];
  } else {
    toneObject = tone;
  }

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 240,
      borderWidth: 0.7,
      borderColor: theme.colors.border,
      borderRadius: theme.borderRadius.md,
      overflow: "hidden",
      marginBottom: theme.margin.md,
    },
    imageBackground: {
      flex: 1,
      justifyContent: "flex-start",
    },
    image: {
      resizeMode: "cover",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
    },
    gradient: {
      flex: 1,
    },
    text: {
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 1,
      textShadowColor: "#000",
      marginTop: "auto",
      marginLeft: 24,
      marginRight: 24,
    },
    subtitle: {
      marginLeft: 24,
      lineHeight: 21,
      maxWidth: "90%",
    },
    actionBtn: {
      paddingVertical: theme.padding.sm,
      paddingHorizontal: theme.padding.md,
      color: toneObject.themeColor,
    },
    actionBtnContainer: {
      marginTop: theme.margin.sm,
      borderRadius: theme.borderRadius.sm,
      overflow: "hidden",
      alignSelf: "flex-start",
      marginLeft: 24,
      marginBottom: 24,
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={imageAddress}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <LinearGradient
          colors={["transparent", toneObject.themeColor]}
          style={styles.gradient}
        >
          <Text
            size="lg"
            weight="bold"
            style={[styles.text, { color: toneObject.titleColor }]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.subtitle,
              {
                color: toneObject.subtitleColor,
              },
            ]}
          >
            {subtitle}
          </Text>
          <DefaultView
            style={[
              styles.actionBtnContainer,
              { backgroundColor: toneObject.subtitleColor },
            ]}
          >
            <Text weight="semibold" style={styles.actionBtn}>
              {buttonCaption}
            </Text>
          </DefaultView>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Featured;
