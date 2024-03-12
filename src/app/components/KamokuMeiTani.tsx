"use client";
import { ReactNode } from "react";
import { Text, Box, Group, Divider } from "@mantine/core";

export function KamokuMeiTani({
  kamoku,
  data,
  needTani,
  kamokuNo,
}: {
  kamoku: string | ReactNode;
  needTani: number;
  data: any[];
  kamokuNo: RegExp;
}) {
  const regex = new RegExp(kamokuNo);

  let countTani = 0;
  for (let i = 0; i < data.length; i++) {
    if (
      data[i]["総合評価"] !== "履修中" &&
      data[i]["総合評価"] !== "F" &&
      data[i]["総合評価"] !== "D" &&
      regex.test(data[i]["科目名 "])
    ) {
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
            color: countTani / needTani < 1 ? "red" : "RGB( 61 , 0 , 0 )",
          }}
          maw={"450px"}
          size="18px"
          m={"10px"}
        >
          {kamoku}
        </Text>
        <Text
          style={{
            color: countTani / needTani < 1 ? "red" : "RGB( 61 , 0 , 0 )",
          }}
          miw={"75px"}
          size="25px"
          m={"10px"}
        >
          {countTani} / {needTani}
        </Text>
      </Group>
      <Divider />
    </>
  );
}
