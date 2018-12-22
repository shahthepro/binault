import React from "react";
import { Root, Drawer, Container, Text, Button, Header, Body, Title, Content, Left, Right, Icon } from "native-base";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
});

export default () =>
  <Root>
    <Drawer type="displace" ref={(ref) => { this.drawer = ref; }} content={
      <Container style={styles.container}>
        <Content padder>
          <Text>Side pane</Text>
        </Content>
      </Container>
    }>
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.drawer._root.open()}>
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Binault</Title>
          </Body>
          <Right/>
        </Header>
        <Content padder>
          <Text>Main pane</Text>
        </Content>
      </Container>
    </Drawer>
  </Root>;
