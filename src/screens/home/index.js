import React, { Component } from "react";
import {
  Content,
  Text,
  Header,
  Button,
  Icon,
  Container,
  Left,
  Right,
  Body,
  Title
} from "native-base";

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.openDrawer()}>
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
    );
  }
}

export default HomeScreen;
