import { Container } from "./components/Container";
import { Content } from "./components/Content";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { Item } from "./components/Item";
import { List } from "./components/List";

export function App() {
  return (
    <Container>
      <Content>
        <h1 className="text-white text-lg font-bold">Workshop React 2024</h1>
        <Form />
        <Filters />
        <List>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
      </Content>
    </Container>
  )
}
