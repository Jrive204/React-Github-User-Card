import React from "react";
import {
  CardColumns,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  CardBlockquote,
  Button,
  CardImgOverlay,
  Small
} from "@bootstrap-styled/v4";

export default function UserCard(props) {
  return (
    <div className='userProfilediv'>
      <CardColumns>
        <Card style={{ width: "35%", margin: "0 auto" }}>
          <CardImg
            top
            width='100%'
            src={props.user.avatar_url}
            alt='Profile picutre'
          />
          <CardBlock>
            <CardTitle>{props.user.name}</CardTitle>
            <CardSubtitle> location: {props.user.location}</CardSubtitle>
            <CardText>{props.user.bio}</CardText>
            <Button>Button</Button>
          </CardBlock>
        </Card>
      </CardColumns>
    </div>
  );
}
