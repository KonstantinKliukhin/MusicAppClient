// "use client";
//
// import { Button, Card, Container, Grid, Input, Row, Text, Textarea, useTheme } from "@nextui-org/react";
// import { useRouter } from "next/router";
// import useInput from "../../../hooks/useInput";
// import { ICreateCommentDto } from "../../../types/entities/track/dto/CreateComment.dto";
// import React from "react";
// import DefaultLayout from "../../../layout/DefaultLayout";
// import styles from "../../../../pages/tracks/[id]/TrackPage.module.css";
//
//
// export default async function TrackPage() {
//   const { isDark } = useTheme();
//   const {
//     query: { id }
//   } = useRouter();
//
//   const { data: track } = useFetchTrackQuery(+id!);
//   const [createComment] = useCreateCommentMutation();
//
//   const name = useInput("");
//   const comment = useInput("");
//
//
//   const onSaveComment = () => {
//     if (!name || !comment || !id || Array.isArray(id)) return;
//     const createCommentDTO: ICreateCommentDto = {
//       username: name.value,
//       text: comment.value
//     };
//     createComment({ id, comment: createCommentDTO });
//   };
//
//
//   if (!track) return null;
//   return (
//     <DefaultLayout>
//       <Container>
//         <Grid.Container gap={2} direction="row" wrap="nowrap">
//           <Grid>
//             <img src={track.picture} width={200} height={200} alt={track.name} />
//           </Grid>
//           <Grid xs={9} direction="column" justify={"space-between"}>
//             <Text size={20}>Artist: {track.artist}</Text>
//             <Text size={20}>Track name: {track.name}</Text>
//             <Text size={18}>Listens: {track.listens} </Text>
//           </Grid>
//         </Grid.Container>
//         <Row>
//           <Text size={20}>Track text:</Text>
//         </Row>
//         <Row>
//           <Text size={18}>{track.text}</Text>
//         </Row>
//         <Card className={styles.addCommentCard}>
//           <Card.Body>
//             <div className={styles.nameInputContainer}>
//               <Input
//                 clearable
//                 bordered
//                 width="100%"
//                 color={isDark ? "primary" : "default"}
//                 status={isDark ? "primary" : "default"}
//                 helperText="Please enter your name"
//                 labelPlaceholder={"Name"}
//                 {...name}
//               />
//             </div>
//             <div className={styles.commentInputContainer}>
//               <Textarea
//                 width={"100%"}
//                 labelPlaceholder="Your Comment"
//                 status={isDark ? "secondary" : "default"}
//                 color={isDark ? "secondary" : "default"}
//                 {...comment}
//               />
//             </div>
//           </Card.Body>
//           <Card.Footer>
//             <Button color="success" auto onClick={onSaveComment}>
//               Save comment
//             </Button>
//           </Card.Footer>
//         </Card>
//         {track.comments.length ? (
//           <>
//             <Row>
//               <Text>Comments:</Text>
//             </Row>
//             {track.comments.map((comment) => (
//               <Row>
//                 <Card>
//                   <Card.Header>
//                     <Text transform={"capitalize"} size={14} b>
//                       {comment.username}
//                     </Text>
//                   </Card.Header>
//                   <Card.Body className={"pt-0"}>
//                     <Text size={13}>{comment.text}</Text>
//                   </Card.Body>
//                 </Card>
//               </Row>
//             ))}
//           </>
//         ) : null}
//       </Container>
//     </DefaultLayout>
//   );
// }

const page = () => <></>

export default page;