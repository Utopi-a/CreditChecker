"use client";

import React, { useState } from "react";
import Papa from "papaparse";
import {
  Button,
  Text,
  FileButton,
  Code,
  Title,
  Container,
  Box,
  Center,
  Collapse,
} from "@mantine/core";
import { KamokuTani } from "../app/components/KamokuTani";
import { KamokuMeiTani } from "../app/components/KamokuMeiTani";
import { Header } from "../app/components/Header";
import { useDisclosure } from "@mantine/hooks";
import { InfoToUse } from "./components/InfoToUse";
import { Footer } from "./components/Footer";

export default function CSVUpload() {
  const [data, setData] = useState<unknown[]>([]);
  const handleFileUpload = (file: File) => {
    Papa.parse(file, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  console.log(data);

  return (
    <Box bg={"RGB( 255 , 248 , 255 )"}>
      <Header />
      <Box maw={"900px"} m={"auto"} p={"20px 4%"}>
        <InfoToUse />
        <Center mb={"30px"}>
          <FileButton
            accept=".csv"
            onChange={(file: File | null) => handleFileUpload(file as File)}
          >
            {(props) => (
              <Button
                c={"RGB( 61 , 0 , 0 )"}
                color={"RGB( 254 , 200 , 251 )"}
                {...props}
              >
                成績表（.csv）をアップロード
              </Button>
            )}
          </FileButton>
        </Center>
        {data && (
          <>
            <KamokuTani
              kamoku={"卒業要件関連の総取得単位数"}
              needTani={124}
              data={data}
              kamokuNo={
                /^EB13612|^EB13012|^EB13622|^EB13022|^EB13032|^EB13632|^EB132..|^EB14812|^EB14012|^EB14822|^EB14022|^EB14832|^EB14032|^EB13892|^EB13972|^EB14907|^EB14927|^EB14917|^EB14908|^EB14978|^EB14912|^EB14922|^EB11221|^EB10672|^EB12[1-5]22|^EB12012|^EB12512|^EB100.*|^EB118.*|^EB117.*|^EB116.*|^EB113.*|^EB111.*|^EB[2-9][0-9]...|^EB1[5-9]...|^EC22061|^EG50031|^EG50041|^EG50091|^EG60051|^EG60071|^EG60361|^EG60541|^EG60581|^EG60591|^EG60601|^EG60651|^EG92031|^12[0-2][0-6]...|^14.....|^2......|3[2-7].....|^99.....|^9200[1-2]..|^9100[12]..|^(?=.*^FA01[12]..|^FBA17[01]1|^FJ20014|^FJ20134|^FJ20144|^FJ22014|^FJ10001|^FJ10101|^FJ12001|^FJ15001|^FJ15101|^FJ12101|^FJ12111|^FJ12121|^FJ12201|^FJ12211|^FJ12221|^FJ12231|^FJ12241|^FJ12251|^FJ12301|^FJ12311|^FJ12321|^FJ12401|^FJ12411|^FJ12421|^FJ15011|^FJ15021|^FJ16001|^FJ25101|^FJ27024|^FJ27034|^FJ20124|^EG50163|^EG60041|^EG60101|^EG60111|^EG60121|^EG60161|^EG60191|^EG60222|^EG60232|^EG60282|^EG60411|^EG60421|^EG60431|^EG60441|^EG60451|^EG60463|^EG60473|^EG60491|^EG60633|^EG90111|^EG90121|^EG90131|^EG90141|^EG90151|^EG90161|^EG90171|^EG90181|^EG90191|^EG91011|^EG91051|^EG91081|^EG91101|^EG91121|^EG91161|^EG91171|^EG91203|^EG91213|^EG91223|^EG91233|^EG91243|^EG91253|^EG92011|^EG92021|^EG92053|^EG92063|^EG92073|^EG92083|^EG92093|^EG92101|^EG92103|^EG92113|^EC12...|^EE1....|^FA.....|^FB.....|^FC.....|^FE.....|^FF.....|^FG.....|^G......|^HB.....|^HE.....)(?!.*EC12301|EC12501|EC12401|EC12201).*$|^A......|^B......|^C......|^EC24.....|^EC34.....|^EC4.....|^EE21...|^FH.....|^HC.....|^Y......|^FJ11001|^EG50011|^EG60061|^EG60252|^EG60272|^EG60401|^EG60551|^EG60561|^EG60571|^EG60611|^EG60621|^EG60641|^EG65611|^EG90211|^EG91141|^EG91151|^EG91181|^EG92041|EC12301|EC12501|EC12401|EC12201|^6......|^31H.*|^31K.*|^31J.*|^31L.*|^11.....|^122[7-8].../
              }
            ></KamokuTani>
            <Title c={"RGB( 61 , 0 , 0 )"} order={2}>
              専門科目
            </Title>
            <Title c={"RGB( 61 , 0 , 0 )"} order={3}>
              必修科目
            </Title>
            <KamokuTani
              kamoku={"専門語学（英語）B1"}
              needTani={1}
              data={data}
              kamokuNo={/^EB13612|^EB13012/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）B2"}
              needTani={1}
              data={data}
              kamokuNo={/^EB13622|^EB13022/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）B3"}
              needTani={1}
              data={data}
              kamokuNo={/^EB13032|^EB13632/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"科学コミュニケーション"}
              needTani={2}
              data={data}
              kamokuNo={/^EB13[127]../}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）D1"}
              needTani={1}
              data={data}
              kamokuNo={/^EB14812|^EB14012/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）D2"}
              needTani={1}
              data={data}
              kamokuNo={/^EB14822|^EB14022/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）D3"}
              needTani={1}
              data={data}
              kamokuNo={/^EB14832|^EB14032/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"生物学演習"}
              needTani={1}
              data={data}
              kamokuNo={/^EB13892|^EB13972/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"生物学研究法"}
              needTani={6}
              data={data}
              kamokuNo={/^EB14907|^EB14927|^EB14917/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"卒業研究"}
              needTani={6}
              data={data}
              kamokuNo={/^EB14908|^EB14978/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"論文作成・プレゼンテーション"}
              needTani={1}
              data={data}
              kamokuNo={/^EB14912|^EB14922/}
            ></KamokuTani>
            <Title c={"RGB( 61 , 0 , 0 )"} order={3}>
              選択科目
            </Title>
            <KamokuTani
              kamoku={
                <>
                  科目番号がEB15からEB99で始まる科目
                  <br />
                  生物物理科学
                  <br />
                  科目番号がEC2(EC24を除く)，EC3(EC34を除く)，EE(EE21，EE5を除く)，EG5，EG6，EG9，FA，FC，FE，FF4，FF5，FG12，FG22，FG32，FG4，FG52，G，HB，HEで始まる科目のうちから学類長が指定するもの
                  <br />
                  その他学類長が専門科目選択として特に指定する科目
                </>
              }
              needTani={40}
              data={data}
              kamokuNo={
                /^EB[2-9][0-9]...|^EB1[5-9]...|^EC22061|^EG50031|^EG50041|^EG50091|^EG60051|^EG60071|^EG60361|^EG60541|^EG60581|^EG60591|^EG60601|^EG60651|^EG92031/
              }
            ></KamokuTani>
            <KamokuTani
              kamoku={"多様性コース"}
              needTani={8}
              data={data}
              kamokuNo={/^EB5[0-9].*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"情報コース"}
              needTani={8}
              data={data}
              kamokuNo={
                /^EB6[0-9].*|^EB15134|^EB15124|^EB15114|^FCC3901|^FCC3911|^FCC3923/
              }
            ></KamokuTani>
            <KamokuTani
              kamoku={"分子細胞コース"}
              needTani={8}
              data={data}
              kamokuNo={/^EB7[0-9].*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"応用生物コース"}
              needTani={8}
              data={data}
              kamokuNo={/^EB8[0-9].*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"人間生物コース"}
              needTani={8}
              data={data}
              kamokuNo={
                /^EB9[0-9].*|^EB72111|^EB72121|^EB72166|^EB72176|^EB72173|^EB72163/
              }
            ></KamokuTani>
            <KamokuTani
              kamoku={"GloBEコース"}
              needTani={8}
              data={data}
              kamokuNo={
                /^EB50171|^EB50211|^EB59151|^EB62011|^EB63111|^EB71031|^EB72121|^EB72911|^EB74111|^EB74211/
              }
            ></KamokuTani>
            <Title c={"RGB( 61 , 0 , 0 )"} order={2}>
              専門基礎科目
            </Title>
            <Title c={"RGB( 61 , 0 , 0 )"} order={3}>
              必修科目
            </Title>
            <KamokuTani
              kamoku={"系統分類・進化学概論"}
              needTani={1}
              data={data}
              kamokuNo={/^EB111.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"遺伝学概論"}
              needTani={1}
              data={data}
              kamokuNo={/^EB113.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"生態学概論"}
              needTani={1}
              data={data}
              kamokuNo={/^EB116.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"動物生理学概論"}
              needTani={1}
              data={data}
              kamokuNo={/^EB117.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"植物生理学概論"}
              needTani={1}
              data={data}
              kamokuNo={/^EB118.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"基礎生物学実験"}
              needTani={3}
              data={data}
              kamokuNo={/^EB100.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）A1"}
              needTani={1}
              data={data}
              kamokuNo={/^EB12012|^EB12512/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"専門語学（英語）A2"}
              needTani={1}
              data={data}
              kamokuNo={/^EB12[1-5]22/}
            ></KamokuTani>
            <KamokuTani
              kamoku={"クラスセミナー"}
              needTani={1}
              data={data}
              kamokuNo={/^EB10672/}
            ></KamokuTani>
            <Title c={"RGB( 61 , 0 , 0 )"} order={3}>
              選択科目
            </Title>
            <KamokuTani
              kamoku={
                <>
                  分子細胞生物学概論
                  <br />
                  Introduction to Biology 1
                </>
              }
              needTani={1}
              data={data}
              kamokuNo={/^EB11221/}
            ></KamokuTani>
            <Title c={"RGB( 61 , 0 , 0 )"} order={2}>
              基礎科目
            </Title>
            <Title c={"RGB( 61 , 0 , 0 )"} order={3}>
              必修科目
            </Title>
            <KamokuTani
              kamoku={
                <>
                  総合科目（フレッシュマン・セミナー，ファーストイヤーセミナー，学問への誘い）
                </>
              }
              needTani={2}
              data={data}
              kamokuNo={/^11.....|^122[7-8].../}
            ></KamokuTani>
            <KamokuTani
              kamoku={<>外国語</>}
              needTani={4}
              data={data}
              kamokuNo={/^31H.*|^31K.*|^31J.*|^31L.*/}
            ></KamokuTani>
            <KamokuTani
              kamoku={<>情報</>}
              needTani={4}
              data={data}
              kamokuNo={/^6....../}
            ></KamokuTani>
            <Title c={"RGB( 61 , 0 , 0 )"} order={3}>
              選択科目
            </Title>
            <KamokuTani
              kamoku={<>基礎科目選択科目の総取得数</>}
              needTani={18}
              data={data}
              kamokuNo={
                /^12[0-2][0-6]...|^14.....|^2......|3[2-7].....|^99.....|^9200[1-2]..|^9100[12]..|^(?=.*^FA01[12]..|^FBA17[01]1|^FJ20014|^FJ20134|^FJ20144|^FJ22014|^FJ10001|^FJ10101|^FJ12001|^FJ15001|^FJ15101|^FJ12101|^FJ12111|^FJ12121|^FJ12201|^FJ12211|^FJ12221|^FJ12231|^FJ12241|^FJ12251|^FJ12301|^FJ12311|^FJ12321|^FJ12401|^FJ12411|^FJ12421|^FJ15011|^FJ15021|^FJ16001|^FJ25101|^FJ27024|^FJ27034|^FJ20124|^EG50163|^EG60041|^EG60101|^EG60111|^EG60121|^EG60161|^EG60191|^EG60222|^EG60232|^EG60282|^EG60411|^EG60421|^EG60431|^EG60441|^EG60451|^EG60463|^EG60473|^EG60491|^EG60633|^EG90111|^EG90121|^EG90131|^EG90141|^EG90151|^EG90161|^EG90171|^EG90181|^EG90191|^EG91011|^EG91051|^EG91081|^EG91101|^EG91121|^EG91161|^EG91171|^EG91203|^EG91213|^EG91223|^EG91233|^EG91243|^EG91253|^EG92011|^EG92021|^EG92053|^EG92063|^EG92073|^EG92083|^EG92093|^EG92101|^EG92103|^EG92113|^EC12...|^EE1....|^FA.....|^FB.....|^FC.....|^FE.....|^FF.....|^FG.....|^G......|^HB.....|^HE.....)(?!.*EC12301|EC12501|EC12401|EC12201).*$|^A......|^B......|^C......|^EC24.....|^EC34.....|^EC4.....|^EE21...|^FH.....|^HC.....|^Y......|^FJ11001|^EG50011|^EG60061|^EG60252|^EG60272|^EG60401|^EG60551|^EG60561|^EG60571|^EG60611|^EG60621|^EG60641|^EG65611|^EG90211|^EG91141|^EG91151|^EG91181|^EG92041|EC12301|EC12501|EC12401|EC12201/
              }
            ></KamokuTani>
            <KamokuTani
              kamoku={
                <>総合科目（フレッシュマン・セミナー，学問への誘いを除く）</>
              }
              needTani={1}
              data={data}
              kamokuNo={/^12[0-2][0-6]...|^14...../}
            ></KamokuTani>
            <KamokuTani
              kamoku={<>体育</>}
              needTani={2}
              data={data}
              kamokuNo={/^2....../}
            ></KamokuTani>
            <KamokuTani
              kamoku={
                <>
                  外国語
                  <br />
                  博物館に関する科目
                  <br />
                  教職に関する科目（現代教育と教育理念，教育史概論，こころの発達，学習の心理，教育指導法（理科）に関する科目に限る）
                </>
              }
              needTani={0}
              data={data}
              kamokuNo={/^3[2-7].....|^99.....|^9200[1-2]..|^9100[12]../}
            ></KamokuTani>
            <KamokuTani
              kamoku={
                <>
                  数学リテラシー1，2，3
                  <br />
                  科目番号がEC12，EE1，FA，FB，FC，FE，FF，FG，G，HB，HEで始まる科目（EA，EBと共通開設のもの，専門科目として指定されているものならびに学類長が指定するものを除く）
                  <br />
                  その他学類長が「関連科目A」として特に指定するもの
                </>
              }
              needTani={9}
              data={data}
              kamokuNo={
                /^(?=.*^FA01[12]..|^FBA17[01]1|^FJ20014|^FJ20134|^FJ20144|^FJ22014|^FJ10001|^FJ10101|^FJ12001|^FJ15001|^FJ15101|^FJ12101|^FJ12111|^FJ12121|^FJ12201|^FJ12211|^FJ12221|^FJ12231|^FJ12241|^FJ12251|^FJ12301|^FJ12311|^FJ12321|^FJ12401|^FJ12411|^FJ12421|^FJ15011|^FJ15021|^FJ16001|^FJ25101|^FJ27024|^FJ27034|^FJ20124|^EG50163|^EG60041|^EG60101|^EG60111|^EG60121|^EG60161|^EG60191|^EG60222|^EG60232|^EG60282|^EG60411|^EG60421|^EG60431|^EG60441|^EG60451|^EG60463|^EG60473|^EG60491|^EG60633|^EG90111|^EG90121|^EG90131|^EG90141|^EG90151|^EG90161|^EG90171|^EG90181|^EG90191|^EG91011|^EG91051|^EG91081|^EG91101|^EG91121|^EG91161|^EG91171|^EG91203|^EG91213|^EG91223|^EG91233|^EG91243|^EG91253|^EG92011|^EG92021|^EG92053|^EG92063|^EG92073|^EG92083|^EG92093|^EG92101|^EG92103|^EG92113|^EC12...|^EE1....|^FA.....|^FB.....|^FC.....|^FE.....|^FF.....|^FG.....|^G......|^HB.....|^HE.....)(?!.*EC12301|EC12501|EC12401|EC12201).*$/
              }
            ></KamokuTani>
            <KamokuMeiTani
              kamoku={
                <>
                  微積分1及び2（理工学群），微積分学A（情報科学類），Calculus
                  1，Calculus A，Mathematics及びAdvanced
                  Mathmatics，または「微積分」相当科目として学類長が指定する科目
                </>
              }
              needTani={0}
              data={data}
              kamokuNo={
                /微積分1|^微積分2|^微積分学A|^Calculus I|^Calculus A|^Mathematics|^Advanced Mathmatics/
              }
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={
                <>
                  線形代数1及び2（理工学群），線形代数A（情報科学類），Linear
                  Algebra
                  I，または「線形代数」相当科目として学類長が指定する科目
                </>
              }
              needTani={0}
              data={data}
              kamokuNo={/^線形代数1|^線形代数2|^線形代数A|^LinearAlgebra I/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={<>物理学序説，物理学概論またはPhysics</>}
              needTani={0}
              data={data}
              kamokuNo={/^物理学序説|^物理学概論|^Physics/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={<>化学序説または化学概論</>}
              needTani={0}
              data={data}
              kamokuNo={/^化学序説|^化学概論/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={<>地学序説，地球環境学1，地球進化学1，2</>}
              needTani={0}
              data={data}
              kamokuNo={/^地学序説|^地球環境学1|^地球進化学1|^地球進化学2/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={<>力学1，2，3またはMechanics 1，2</>}
              needTani={0}
              data={data}
              kamokuNo={/^力学1|^力学2|^力学3|^Mechanics I|^Mechanics II/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={<>電磁気学1，2，3またはElectromagnetism 1</>}
              needTani={0}
              data={data}
              kamokuNo={/^電磁気学1|^電磁気学2|^電磁気学3|^Electromagnetism I/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={<>化学1，2，3またはChemistry 1，2，3</>}
              needTani={0}
              data={data}
              kamokuNo={
                /^化学1|^化学2|^化学3|^Chemistry I|^Chemistry II|^Chemistry III/
              }
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={
                <>
                  プログラミング入門または
                  <br />
                  Programming 1，2（総合理工）
                </>
              }
              needTani={0}
              data={data}
              kamokuNo={/^プログラミング入門*|^Programming I|^Programming II/}
            ></KamokuMeiTani>
            <KamokuMeiTani
              kamoku={
                <>
                  Thermodynamics 1，2
                  <br />
                  物理学実験
                  <br />
                  化学実験
                  <br />
                  地球学実験
                  <br />
                  Statistics
                </>
              }
              needTani={0}
              data={data}
              kamokuNo={
                /^Thermodynamics I|^Thermodynamics II|^^物理学実験|^^化学実験|^^地球学実験|^^Statistics/
              }
            ></KamokuMeiTani>
            <KamokuTani
              kamoku={
                <>
                  生物資源の開発・生産と持続利用，生物資源としての遺伝子とゲノム，生物資源と環境，生物資源学にみる食品科学・技術の最前線
                  <br />
                  科目番号がA，B，C，EC24，EC34，EC4，EE21，FH，HC，Yで始まる科目（EA，EBと共通開設のもの，専門科目として指定されているものならびに学類長が指定するものを除く）
                  <br />
                  その他学類長が「関連科目B」として特に指定するもの
                </>
              }
              needTani={6}
              data={data}
              kamokuNo={
                /^A......|^B......|^C......|^EC24.....|^EC34.....|^EC4.....|^EE21...|^FH.....|^HC.....|^Y......|^FJ11001|^EG50011|^EG60061|^EG60252|^EG60272|^EG60401|^EG60551|^EG60561|^EG60571|^EG60611|^EG60621|^EG60641|^EG65611|^EG90211|^EG91141|^EG91151|^EG91181|^EG92041|EC12301|EC12501|EC12401|EC12201/
              }
            ></KamokuTani>
          </>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
