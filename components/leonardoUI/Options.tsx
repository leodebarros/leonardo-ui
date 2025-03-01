import React, { forwardRef, useState } from "react";
import {
  StyleSheet,
  View as RNView,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
} from "react-native";
import { useTheme } from "./Theme";
import { Text } from "./Text";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useThemeActions } from "@/store/themeContext";
import { Switch, SwitchType } from "./Switch";

interface OptionsProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  sectionTitle?: string;
}

export function Options({ children, style, sectionTitle }: OptionsProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.md,
      padding: theme.padding.md,
      marginBottom: theme.margin.lg,
      gap: 9,
    },
    sectionTitle: {
      paddingLeft: theme.padding.xs,
      marginBottom: theme.margin.sm,
    },
  });

  return (
    <>
      {sectionTitle ? (
        <Text
          color="textSecondary"
          weight="semibold"
          size="sm"
          style={styles.sectionTitle}
        >
          {sectionTitle}
        </Text>
      ) : null}
      <RNView style={[styles.container, style]}>{children}</RNView>
    </>
  );
}

interface OptionsItemProps {
  iconName: keyof typeof AntDesign.glyphMap;
  avatar?: ImageSourcePropType;
  label: string;
  description?: string;
  actionIcon?: "chevron-forward-outline" | "chevron-expand";
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

type TouchableOpacityRef = React.ElementRef<typeof TouchableOpacity>;

Options.Item = forwardRef<TouchableOpacityRef, OptionsItemProps>(
  function OptionsItem(
    {
      iconName,
      avatar,
      label,
      description,
      actionIcon,
      onPress,
      disabled = false,
    },
    ref
  ) {
    const theme = useTheme();
    const { chosenPrimaryKey } = useThemeActions();
    const isAvatarMode = !!avatar;

    const styles = StyleSheet.create({
      itemContainer: {
        minWidth: "100%",
        maxWidth: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: isAvatarMode || description ? 42 : 30,
        paddingLeft: theme.padding.sm,
        paddingRight: theme.padding.xs,
      },
      leftSection: {
        flexDirection: "row",
        alignItems: "center",
        flexShrink: 1,
        gap: 8,
      },
      avatarImage: {
        width: 32,
        height: 32,
        marginRight: theme.margin.sm,
        backgroundColor: theme.colors.border,
        borderRadius: theme.borderRadius.md,
      },
      main: {
        flexDirection: isAvatarMode || description ? "column" : "row",
        alignItems: isAvatarMode || description ? "flex-start" : "center",
        gap: isAvatarMode || description ? 2 : 8,
        flexShrink: 1,
      },
      description: {
        fontSize: theme.fontSize.sm,
        maxWidth: "100%",
      },
      rightSection: {
        marginLeft: theme.margin.sm,
      },
    });

    const Content = (
      <RNView style={styles.itemContainer}>
        <RNView style={styles.leftSection}>
          {avatar ? (
            <Image
              source={avatar}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          ) : (
            <AntDesign
              name={iconName}
              size={18}
              color={theme.colors.textSidebar}
            />
          )}
          <RNView style={styles.main}>
            <Text weight="semibold" color="textSidebar" numberOfLines={1}>
              {label}
            </Text>
            {description ? (
              <Text
                color="textSecondary"
                style={styles.description}
                numberOfLines={1}
              >
                {description}
              </Text>
            ) : null}
          </RNView>
        </RNView>

        {actionIcon ? (
          <RNView style={styles.rightSection}>
            <Ionicons name={actionIcon} size={21} color={chosenPrimaryKey} />
          </RNView>
        ) : null}
      </RNView>
    );

    if (onPress) {
      return (
        <TouchableOpacity ref={ref} onPress={onPress} disabled={disabled}>
          {Content}
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity ref={ref} disabled={disabled}>
          {Content}
        </TouchableOpacity>
      );
    }
  }
);

interface SelectOption {
  label: string;
  value: string;
}

interface OptionsSelectProps {
  iconName: keyof typeof AntDesign.glyphMap;
  label: string;
  options: SelectOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

Options.Select = function OptionsSelect({
  iconName,
  label,
  options,
  selectedValue,
  onChange,
  disabled = false,
  style,
}: OptionsSelectProps) {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();
  const [open, setOpen] = useState(false);

  const handlePress = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 30,
      paddingLeft: theme.padding.sm,
      paddingRight: theme.padding.xs,
    },
    leftSection: {
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 1,
      gap: 8,
    },
    rightSection: {
      marginLeft: theme.margin.sm,
    },
    dropdownContainer: {
      position: "absolute",
      backgroundColor: theme.colors.accentUsageBg,
      borderRadius: theme.borderRadius.md,
      paddingHorizontal: theme.padding.md,
      paddingVertical: theme.padding.xs,
      top: 40,
      left: theme.padding.sm,
      right: theme.padding.sm,
      zIndex: 9999,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5, // For Android
    },
    dropdownItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 15,
    },
    separator: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    label: {
      color: chosenPrimaryKey,
    },
    iconColor: {
      color: chosenPrimaryKey,
    },
  });

  return (
    <React.Fragment>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={handlePress}
        disabled={disabled}
      >
        <RNView style={styles.leftSection}>
          <AntDesign
            name={iconName}
            size={18}
            color={theme.colors.textSidebar}
          />
          <Text style={styles.label} weight="semibold" numberOfLines={1}>
            {selectedValue
              ? options.find((o) => o.value === selectedValue)?.label ?? label
              : label}
          </Text>
        </RNView>
        <RNView style={styles.rightSection}>
          <Ionicons name="chevron-expand" size={20} color={chosenPrimaryKey} />
        </RNView>
      </TouchableOpacity>

      {open && (
        <RNView style={styles.dropdownContainer}>
          {options.map((opt, index) => (
            <RNView key={opt.value}>
              <TouchableOpacity
                style={[styles.dropdownItem]}
                onPress={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
              >
                <Text color="textSidebar" weight="semibold">
                  {opt.label}
                </Text>
                {opt.value === selectedValue ? (
                  <AntDesign
                    name="check"
                    size={18}
                    color={theme.colors.textPrimary}
                  />
                ) : null}
              </TouchableOpacity>
              <RNView
                style={[
                  styles.separator,
                  index === options.length - 1 && { borderBottomWidth: 0 },
                ]}
              ></RNView>
            </RNView>
          ))}
        </RNView>
      )}
    </React.Fragment>
  );
};

interface OptionsSwitchProps {
  iconName: keyof typeof AntDesign.glyphMap;
  label: string;
  description?: string;
  value: boolean;
  avatar?: ImageSourcePropType;
  type?: SwitchType;
  onValueChange?: (val: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

Options.Switch = function OptionsSwitch({
  iconName,
  label,
  description,
  avatar,
  value,
  type = "primary",
  onValueChange,
  disabled = false,
  style,
}: OptionsSwitchProps) {
  const theme = useTheme();

  const isAvatarMode = !!avatar;
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: isAvatarMode || description ? 42 : 30,
      paddingLeft: theme.padding.sm,
      paddingRight: theme.padding.xs,
    },
    main: {
      flexDirection: isAvatarMode || description ? "column" : "row",
      alignItems: isAvatarMode || description ? "flex-start" : "center",
      gap: isAvatarMode || description ? 2 : 8,
      flexShrink: 1,
    },
    description: {
      fontSize: theme.fontSize.sm,
      maxWidth: "100%",
    },
    leftSection: {
      flexDirection: "row",
      alignItems: "center",
      flexShrink: 1,
      gap: 8,
    },
    rightSection: {
      marginLeft: theme.margin.sm,
    },
  });

  return (
    <RNView style={[styles.container, style]}>
      <RNView style={styles.leftSection}>
        <AntDesign name={iconName} size={18} color={theme.colors.textSidebar} />
        <RNView style={styles.main}>
          <Text weight="semibold" color="textSidebar" numberOfLines={1}>
            {label}
          </Text>
          {description ? (
            <Text
              color="textSecondary"
              style={styles.description}
              numberOfLines={1}
            >
              {description}
            </Text>
          ) : null}
        </RNView>
      </RNView>
      <RNView style={styles.rightSection}>
        <Switch
          value={value}
          onValueChange={onValueChange}
          type={type}
          disabled={disabled}
        />
      </RNView>
    </RNView>
  );
};
