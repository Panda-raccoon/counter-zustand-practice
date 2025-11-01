// import { useState } from "react";

import "./App.css";
import CountBox from "./components/CountBox";
import counterStore from "./stores/counterStore";
import { Button, ButtonGroup, Box, Paper, Typography } from "@mui/material";

function App() {
  // const [count, setCount] = useState(0);
  const { count, increase, increaseBy, decrease, decreaseBy } = counterStore();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* 트럼프 카드 */}
      <Paper
        elevation={5}
        sx={{
          width: 280,
          height: 400,
          borderRadius: 3,
          backgroundColor: "white",
          border: "2px solid black",
          position: "relative",
          marginBottom: 4,
        }}
      >
        {/* 왼쪽상단 */}
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            fontWeight: "bold",
          }}
        >
          {count}
        </Typography>

        {/* 가운데 숫자 */}
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: "bold",
          }}
        >
          {count}
        </Typography>

        {/* 오른쪽하단 */}
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            bottom: 10,
            right: 10,
            fontWeight: "bold",
            transform: "rotate(180deg)",
          }}
        >
          {count}
        </Typography>
      </Paper>

      {/* 버튼들 */}
      <ButtonGroup variant="contained" color="primary" size="large">
        <Button onClick={increase}>UP</Button>
        <Button onClick={() => increaseBy(10)}>+10</Button>
      </ButtonGroup>

      <ButtonGroup
        variant="contained"
        color="secondary"
        size="large"
        sx={{ marginTop: 2 }}
      >
        <Button onClick={decrease}>DOWN</Button>
        <Button onClick={() => decreaseBy(-10)}>-10</Button>
      </ButtonGroup>

      <CountBox />
    </Box>
  );
}

export default App;
