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
  Title,
  Tabs,
  TabHeading,
  Tab
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
        <Content style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <Tabs tabBarPosition="bottom">
            <Tab heading={ <TabHeading><Icon name="ios-folder-open" /></TabHeading> }>
              <Content padder><Text>Files</Text></Content>
            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-images" /></TabHeading> }>
              <Content padder><Text>Gallery</Text></Content>
            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-create" /></TabHeading> }>
              <Content padder><Text>Notes</Text></Content>
            </Tab>
            <Tab heading={ <TabHeading><Icon name="ios-globe" /></TabHeading> }>
              <Content padder><Text>Browser</Text></Content>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
