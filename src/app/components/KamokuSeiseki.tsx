"use client";
import { ReactNode } from "react";
import { Text, Box, Group, Divider } from "@mantine/core";

export function KamokuSeiseki({
  data,
  seiseki,
}: {
  data: any[];
  seiseki: string;
}) {
  let countTani = 0;
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]["総合評価"]);
    console.log(countTani);
    if (data[i]["総合評価"] == seiseki) {
      countTani += parseFloat(data[i]["単位数"]);
      console.log(data[i]["科目名 "], data[i]["科目番号"], countTani);
    }
  }

  return (
    <>
      <Group
        mih={50}
        gap="md"
        align="center"
        wrap="nowrap"
        justify="space-between"
      >
        <Text
          style={{
            color: "RGB( 61 , 0 , 0 )",
          }}
          maw={"450px"}
          size="18px"
          m={"10px"}
        >
          {seiseki}
        </Text>
        <Text
          style={{
            color: "RGB( 61 , 0 , 0 )",
          }}
          miw={"75px"}
          size="25px"
          m={"10px"}
        >
          {countTani}
        </Text>
      </Group>
      <Divider />
    </>
  );
}
