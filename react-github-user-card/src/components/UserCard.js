import React from "react";
import {
  CardColumns,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardGroup
} from "@bootstrap-styled/v4";

export default function UserCard(props) {
  return (
    <div className='userProfilediv'>
      <CardColumns>
        <Card
          style={{
            width: "35%",
            margin: "0 auto",
            backgroundColor: "white",
            marginBottom: "30px"
          }}>
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
            <Button href={`${props.user.html_url}`} target='_blank'>
              Github
            </Button>
          </CardBlock>
        </Card>
      </CardColumns>
      <CardGroup
        style={{
          width: "100%",
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          margin: `0 auto`,
          color: "white"
        }}>
        {props.followers.map(follower => (
          <Card
            style={{
              width: "25%",
              background: `#24292e`,
              marginBottom: "30px"
            }}>
            <CardImg
              top
              width='100%'
              src={follower.avatar_url}
              alt='Profile picutre'
            />
            <CardBlock>
              <CardTitle>{follower.login}</CardTitle>

              <Button href={`${follower.html_url}`} target='_blank'>
                Github
              </Button>
            </CardBlock>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
