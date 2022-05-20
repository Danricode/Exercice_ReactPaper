import * as React from "react";
import {
  Appbar,
  Avatar,
  Headline,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import BottomNav from "./BottomNav";

const MyComponent = () => {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Activity tracker" subtitle="" color="white" />
        <Avatar.Image
          size={40}
          source={require("./assets/avatar.png")}
          style={{ marginRight: 15 }}
        />
      </Appbar.Header>

      <Headline style={styles.headline}>Home</Headline>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.paragraph}>26 Mai 2021</Paragraph>
          <View style={styles.view}>
            <Title>Marche à pied</Title>
            <Card.Cover
              source={require("./assets/marche.png")}
              style={styles.cover}
            />
          </View>
          <View style={styles.view}>
            <Title style={{ fontSize: 15 }}>Distance</Title>
            <Title style={{ fontSize: 15 }}>Durée</Title>
          </View>
          <View style={styles.view}>
            <Paragraph style={styles.paragraph}>6 Km</Paragraph>
            <Paragraph style={styles.paragraph}>0h59mn</Paragraph>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.paragraph}>23 Mai 2021</Paragraph>
          <View style={styles.view}>
            <Title>Vélo</Title>
            <Card.Cover
              source={require("./assets/velo.png")}
              style={styles.cover}
            />
          </View>
          <View style={styles.view}>
            <Title style={{ fontSize: 15 }}>Distance</Title>
            <Title style={{ fontSize: 15 }}>Durée</Title>
          </View>
          <View style={styles.view}>
            <Paragraph style={styles.paragraph}>10 Km</Paragraph>
            <Paragraph style={styles.paragraph}>1h38mn</Paragraph>
          </View>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.paragraph}>20 Mai 2021</Paragraph>
          <View style={styles.view}>
            <Title>Marche à pied</Title>
            <Card.Cover
              source={require("./assets/marche.png")}
              style={styles.cover}
            />
          </View>
          <View style={styles.view}>
            <Title style={{ fontSize: 15 }}>Distance</Title>
            <Title style={{ fontSize: 15 }}>Durée</Title>
          </View>
          <View style={styles.view}>
            <Paragraph style={styles.paragraph}>2 Km</Paragraph>
            <Paragraph style={styles.paragraph}>0h26mn</Paragraph>
          </View>
        </Card.Content>
      </Card>
      <Appbar>
        <BottomNav style={styles.bNav}></BottomNav>
      </Appbar>
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
  },
  card: {
    borderWidth: 2,
    margin: 5,
  },
  paragraph: {
    color: "#aaaaaa",
  },
  cover: {
    width: 90,
    height: 60,
    resizeMode: "cover",
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default MyComponent;
