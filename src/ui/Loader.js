import React from "react";
import { Loader, Image, Segment } from "semantic-ui-react";
import {StyledH1} from '../appStyles'

const CustomLoader = () => {
  return (
    <Segment inverted>
      <Loader active inverted />
        <StyledH1>Loading...</StyledH1>
      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
};

export default CustomLoader;
