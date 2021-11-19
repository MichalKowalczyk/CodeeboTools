/*
  MIT License
  Copyright (c) 2021 MichalKowalczyk
  
  Source: https://github.com/MichalKowalczyk/CodeeboTools

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

import React, { useCallback, useEffect, useState } from "react";
import "./pixel-perfect.scss";
import PixelPerfectImg from "./PixelPerfect.jpg";

interface Props {
  img?: string;
  width?: number;
}

const PixelPerfect: React.FC<Props> = (props: Props) => {
  const { img = PixelPerfectImg, width = 1920 } = props;

  const [isActive, setIsActive] = useState(false);
  const [opacity, setOpacity] = useState(30);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        setIsActive(!isActive); // esc
      }
      if (event.keyCode === 192) {
        var newOpacity = opacity + 10;
        setOpacity(newOpacity > 100 ? newOpacity % 100 : newOpacity); // `
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [isActive, opacity]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress, false);

    return () => {
      window.removeEventListener("keydown", handleKeyPress, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleKeyPress]);

  return (
    <div className={`pixel-perfect${isActive ? "" : " hidden"}`} style={{ width: width, opacity: opacity / 100 }}>
      <img src={img} alt="pixe-perfect" />
    </div>
  );
};

export default PixelPerfect;
