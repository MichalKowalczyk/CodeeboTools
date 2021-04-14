import latinize from "latinize";
import React, { useEffect, useState } from "react";
import { ToastsStore } from "react-toasts";
import InputText from "../../components/contact-form/input-text/input-text";
import Container from "../../components/container/container";
import Col from "../../components/grid/col";
import Grid from "../../components/grid/grid";
import Row from "../../components/grid/row";
import MainHeader from "../../components/main-header/main-header";
import StandardTextBlock from "../../components/standard-text-block/standard-text-block";

const TitleConverter: React.FC = () => {
  const [textToConvert, setTextToConvert] = useState('');
  const [textConvertedSnake, setTextConvertedSnake] = useState('');
  const [textConvertedPascal, setTextConvertedPascal] = useState('');
  const [textConvertedSkewer, setTextConvertedSkewer] = useState('');


  const convert = () => {
    let preConvert = latinize(textToConvert.toLowerCase()).replace(/[^0-9a-zA-Z ]/gi, '');
    setTextConvertedSnake(preConvert.replaceAll(' ', '_'));
    setTextConvertedSkewer(preConvert.replaceAll(' ', '-'));
    let preConvertedArray = preConvert.split(' ');
    let camelArray = preConvertedArray.map(x => { return x.charAt(0).toUpperCase() + x.slice(1) });
    setTextConvertedPascal(camelArray.join(''));
  }

  useEffect(() => {
    convert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textToConvert])

  const handleKeyDown = (e: any) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name === "textConvertedSnake" || e.target.name === "textConvertedPascal" || e.target.name === "textConvertedSkewer") {
      e.target.select();
      document.execCommand('copy');
      ToastsStore.success('Skopiowano zawartość do schowka.');
    }
  }

  return (
    <section style={{ paddingTop: 150, minHeight: 'calc(100vh + 1px);' }}>
      <Container>
        <Grid>
          <Row>
            <Col size={12}>
              <MainHeader>Title converter</MainHeader>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col size={[6, 6, 6, 12]}>
              <InputText
                name="textToConvert"
                type="textarea"
                label="Input"
                value={textToConvert}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextToConvert(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <StandardTextBlock>
                <p>Example input:</p>
                <h2 style={{ color: '#EE7911', fontWeight: 400 }}>
                  {'Przykładowy tytuł ze znakami specjalnymi<>?:"{}+_!!!'}
                </h2>
              </StandardTextBlock>
            </Col>
            <Col size={[6, 6, 6, 12]} className="copycursor">
              <InputText
                name="textConvertedSnake"
                type="textarea"
                label="Output snake_case (for files names)"
                readOnly={true}
                onClick={handleKeyDown}
                value={textConvertedSnake}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextConvertedSnake(e.target.value)}
              />
              <br />
              <InputText
                name="textConvertedPascal"
                type="textarea"
                label="Output PascalCase (for components names)"
                readOnly={true}
                onClick={handleKeyDown}
                value={textConvertedPascal}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextConvertedPascal(e.target.value)}
              />
              <br/>
              <InputText
                name="textConvertedSkewer"
                type="textarea"
                label="Output SkewerCase (for url names)"
                readOnly={true}
                onClick={handleKeyDown}
                value={textConvertedSkewer}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextConvertedSkewer(e.target.value)}
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <StandardTextBlock>
                <p>Example snake_case output:</p>
                <h2 style={{ color: '#EE7911', fontWeight: 400 }}>
                  {'przykladowy_tytul_ze_znakami_specjalnymi'}
                </h2>
              </StandardTextBlock>
              <br />
              <StandardTextBlock>
                <p>Example PascalCase output:</p>
                <h2 style={{ color: '#EE7911', fontWeight: 400 }}>
                  {'PrzykladowyTytulZeZnakamiSpecjalnymi'}
                </h2>
              </StandardTextBlock>
              <br />
              <StandardTextBlock>
                <p>Example skewer-case output:</p>
                <h2 style={{ color: '#EE7911', fontWeight: 400 }}>
                  {'przykladowy-tytul-ze-znakami-specjalnymi'}
                </h2>
              </StandardTextBlock>
            </Col>
          </Row>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </section>
  )
}

export default TitleConverter;