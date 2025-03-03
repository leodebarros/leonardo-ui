import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
} from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View as RNView,
  ViewStyle,
  ScrollView,
} from "react-native";
import { useTheme } from "./Theme";
import { useThemeActions } from "@/store/themeContext";
import { FontWeight, Text } from "./Text";

export type TabType = "default" | "primary" | "outline" | "ghost";

interface TabsContextType {
  activeTabId: string | undefined;
  setActiveTabId: (id: string) => void;
  tabType: TabType;
  size: "sm" | "base";
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs component");
  }
  return context;
}

interface TabsProps {
  type?: TabType;
  size?: "sm" | "base";
  style?: StyleProp<ViewStyle>;
  tabsContainerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  scrollable?: boolean;
}

export function Tabs({
  type = "default",
  size = "base",
  style,
  tabsContainerStyle,
  contentContainerStyle,
  children,
  defaultActiveTab,
  onTabChange,
  scrollable = false,
}: TabsProps) {
  const theme = useTheme();

  const firstTabId = React.Children.toArray(children)
    .filter(
      (child) =>
        React.isValidElement(child) && (child as ReactElement).type === Tab
    )
    .map((child) => (child as ReactElement).props.id)[0];

  const [activeTabId, setActiveTabId] = useState<string>(
    defaultActiveTab || firstTabId
  );

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    onTabChange?.(id);
  };

  const TabListComponent = scrollable ? ScrollView : RNView;

  const styles = StyleSheet.create({
    tabsContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
      justifyContent: "space-around",
      ...(type !== "outline" &&
        type !== "ghost" && {
          backgroundColor: theme.colors.surface,
          padding: 8,
          borderRadius: theme.borderRadius.md,
        }),
      ...(type === "outline" && {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      }),
    },
    scrollableTabsContainer: {
      flexDirection: "row",
    },
    contentContainer: {
      paddingTop: theme.padding.md,
    },
  });

  const tabs: React.ReactNode[] = [];
  let contents: { [key: string]: React.ReactNode } = {};

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Tab) {
        tabs.push(child);
      } else if (child.type === TabContent) {
        const id = child.props.tabId;
        if (id) {
          contents[id] = child;
        }
      }
    }
  });

  return (
    <TabsContext.Provider
      value={{
        activeTabId,
        setActiveTabId: handleTabChange,
        tabType: type,
        size,
      }}
    >
      <RNView style={[style, { minWidth: "100%", maxWidth: "100%" }]}>
        <TabListComponent
          horizontal={scrollable}
          showsHorizontalScrollIndicator={false}
          style={[
            scrollable ? styles.scrollableTabsContainer : styles.tabsContainer,
            tabsContainerStyle,
          ]}
        >
          {tabs}
        </TabListComponent>
        <RNView style={[styles.contentContainer, contentContainerStyle]}>
          {contents[activeTabId]}
        </RNView>
      </RNView>
    </TabsContext.Provider>
  );
}

interface TabProps {
  id: string;
  label: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Tab = ({ id, label, disabled = false, style }: TabProps) => {
  const theme = useTheme();
  const { chosenPrimaryKey } = useThemeActions();
  const { activeTabId, setActiveTabId, tabType, size } = useTabsContext();

  const active = activeTabId === id;

  let textColor: string;
  let backgroundColor: string = "transparent";
  let borderColor: string = "transparent";

  switch (tabType) {
    case "primary":
      textColor = active ? theme.colors.white : theme.colors.textSecondary;
      backgroundColor = active ? chosenPrimaryKey : "transparent";
      break;
    case "default":
      textColor = active
        ? theme.colors.overBackground
        : theme.colors.textSecondary;
      backgroundColor = active
        ? theme.colors.antiOverBackground
        : "transparent";
      break;
    case "outline":
      textColor = active ? chosenPrimaryKey : theme.colors.textSecondary;
      borderColor = "transparent";
      break;
    case "ghost":
      textColor = active ? chosenPrimaryKey : theme.colors.textSecondary;
      break;
  }

  const styles = StyleSheet.create({
    tab: {
      flex: 1,
      position: "relative",
      paddingHorizontal: theme.padding.md,
      paddingVertical: theme.padding.sm,
      borderRadius:
        tabType !== "outline" && tabType !== "ghost"
          ? theme.borderRadius.md
          : 0,
      borderWidth:
        tabType !== "ghost" && (tabType !== "outline" || active) ? 1 : 0,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
    },
    activeIndicator: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 3,
      backgroundColor: tabType === "outline" ? chosenPrimaryKey : "transparent",
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
    },
    tabText: {
      marginBottom: tabType === "outline" ? 6 : 0,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity
      style={[styles.tab, { opacity: disabled ? 0.5 : 1 }, style]}
      onPress={() => !disabled && setActiveTabId(id)}
      disabled={disabled}
    >
      <Text
        size={size}
        weight={active ? "semibold" : ("regular" as FontWeight)}
        style={[styles.tabText, { color: textColor }]}
      >
        {label}
      </Text>
      {active && tabType === "outline" && (
        <RNView style={styles.activeIndicator} />
      )}
    </TouchableOpacity>
  );
};

interface TabContentProps {
  tabId: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const TabContent = ({ children, style }: TabContentProps) => {
  return <RNView style={style}>{children}</RNView>;
};

Tabs.Tab = Tab;
Tabs.TabContent = TabContent;

export default Tabs;
