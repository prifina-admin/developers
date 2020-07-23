import React from "react";
import Text from "../src/Text";

export default { title: "Text" };

export const text = () => (
    <div>
        <Text
            m={"10px"}
        >
            m=10px: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Fermentum odio eu feugiat pretium nibh ipsum consequat. Amet nisl purus in mollis nunc sed id. Ut ornare lectus sit amet. Lobortis feugiat vivamus at augue eget arcu dictum.
        </Text>

        <hr />

        <Text
            fontSize={"20px"}
            fontStyle={"italic"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"red"}
            textTransform={"uppercase"}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla urna porttitor rhoncus dolor purus non enim. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Fermentum odio eu feugiat pretium nibh ipsum consequat. Amet nisl purus in mollis nunc sed id. Ut ornare lectus sit amet. Lobortis feugiat vivamus at augue eget arcu dictum.
        </Text>

        <hr />

        <Text
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            textAlign={"right"}
            color={"#00847A"}
            textTransform={"capitalize"}
            textDecorationLine={"line-through"}
            as={"p"}
        >
            FERMENTUM LEO VEL ORCI PORTA NON PULVINAR. NON PULVINAR NEQUE LAOREET SUSPENDISSE INTERDUM CONSECTETUR LIBERO ID FAUCIBUS. PENATIBUS ET MAGNIS DIS PARTURIENT MONTES NASCETUR RIDICULUS MUS. DOLOR MORBI NON ARCU RISUS QUIS VARIUS QUAM QUISQUE ID. EGESTAS INTEGER EGET ALIQUET NIBH PRAESENT TRISTIQUE MAGNA SIT AMET. AMET DICTUM SIT AMET JUSTO DONEC ENIM DIAM VULPUTATE UT. MI EGET MAURIS PHARETRA ET ULTRICES NEQUE.
        </Text>

        <hr />

        <Text
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            textAlign={"right"}
            color={"#00847A"}
            textTransform={"capitalize"}
            textDecorationLine={"underline"}
            as={"div"}
        >
            FERMENTUM LEO VEL ORCI PORTA NON PULVINAR. NON PULVINAR NEQUE LAOREET SUSPENDISSE INTERDUM CONSECTETUR LIBERO ID FAUCIBUS. PENATIBUS ET MAGNIS DIS PARTURIENT MONTES NASCETUR RIDICULUS MUS. DOLOR MORBI NON ARCU RISUS QUIS VARIUS QUAM QUISQUE ID. EGESTAS INTEGER EGET ALIQUET NIBH PRAESENT TRISTIQUE MAGNA SIT AMET. AMET DICTUM SIT AMET JUSTO DONEC ENIM DIAM VULPUTATE UT. MI EGET MAURIS PHARETRA ET ULTRICES NEQUE.
        </Text>

        <hr />
    </div>
);
text.story = {
    name: "Text Component",
};