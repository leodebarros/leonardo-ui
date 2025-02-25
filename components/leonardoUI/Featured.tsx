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

interface Tone {
  themeColor: string;
  titleColor: string;
  subtitleColor: string;
}

interface FeaturedProps {
  title: string;
  subtitle: string;
  buttonCaption: string;
  imageAddress: ImageSourcePropType;
  tone?: Tone;
}

const Featured = ({
  title,
  subtitle,
  buttonCaption,
  imageAddress,
  tone = {
    themeColor: "rgb(15, 40, 112)",
    titleColor: "#e9f6ff",
    subtitleColor: "#b6dfff",
  },
}: FeaturedProps) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 240,
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
      color: tone.themeColor,
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
          colors={["transparent", tone.themeColor]}
          style={styles.gradient}
        >
          <Text
            size="lg"
            weight="bold"
            style={[styles.text, { color: tone.titleColor }]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.subtitle,
              {
                color: tone.subtitleColor,
              },
            ]}
          >
            {subtitle}
          </Text>
          <DefaultView
            style={[
              styles.actionBtnContainer,
              { backgroundColor: tone.subtitleColor },
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
