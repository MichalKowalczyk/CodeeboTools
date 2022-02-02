import React, { useEffect, useState } from "react";
import Col from "../grid/col";
import Grid from "../grid/grid";
import Row from "../grid/row";
import BtnCustom from "./btn-custom/btn-custom";
import CheckBox from "./input-checkbox/input-checkbox";
import FormInput from "./input-text/input-text";
import "./contact-form.scss";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { select_refferalState_Suggestly } from "../../redux/refferalState/refferalState.selectors";
import { unsetRefferalSuggestly } from "../../redux/refferalState/refferalState.actions";

let timeoutForm: any = undefined;

interface Props {
  title?: string | React.ReactNode;
}

let changeSendBtnStatus: NodeJS.Timeout;

const ContactForm: React.FC<Props> = (props: Props) => {
  const suggestlyRefferal = useSelector(select_refferalState_Suggestly, shallowEqual);
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("normal" as "normal" | "pending" | "success" | "fail");
  const [formStatusWatcher, setFormStatusWatcher] = useState("normal" as "normal" | "pending" | "success" | "fail");

  const [isRuleAccepted, setIsRuleAccepted] = useState(false);
  const [isRodoAccepted, setIsRodoAccepted] = useState(false);
  const [isPhoneAccepted, setPhoneAccepted] = useState(false);
  const [isMarketingAccepted, setIsMarketingAccepted] = useState(false);

  function gtag_report_conversion() {
    var callback = function () {};

    (window as any).gtag("event", "conversion", { send_to: "xxxxxxxxxxxxxxxxxxxxxxxx", event_callback: callback });
    return false;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFormStatus("pending");
    var payload = {
      name: name,
      email: email,
      phone: phone,
      message: suggestlyRefferal ? `[Refferal: Suggestly] ` + message : message,
      isRuleAccepted: isRuleAccepted ? 'Wyrażam zgodę na LOREM IPSUM' : "NIE",
      isRodoAccepted: isRodoAccepted ? "Wyrażam zgodę na LOREM IPSUM" : "NIE",
      isPhoneAccepted: isPhoneAccepted ? "Wyrażam zgodę na LOREM IPSUM" : "NIE",
      isMarketingAccepted: isMarketingAccepted ? "Wyrażam zgodę na LOREM IPSUM" : "NIE",
    };

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    var result = fetch("/send.php", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    result
      .then((response) => {
        if (response.ok) {
          setFormStatusWatcher("success");
          setname("");
          setEmail("");
          setPhone("");
          setMessage("");
          setIsRuleAccepted(false);
          setIsRodoAccepted(false);
          setPhoneAccepted(false);
          setIsMarketingAccepted(false);
          gtag_report_conversion();
          window.open("https://xxxxxxxxxxxxxxxxxxxxxx");
        } else {
          setFormStatusWatcher("fail");
        }
      })
      .catch((error) => {
        setFormStatusWatcher("fail");
      });
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutForm);
    };
  }, []);

  useEffect(() => {
    if (formStatusWatcher === "success" && suggestlyRefferal) {
      dispatch(unsetRefferalSuggestly());
    }
    setFormStatus(formStatusWatcher);
    if (changeSendBtnStatus) clearTimeout(changeSendBtnStatus);
    changeSendBtnStatus = setTimeout(() => {
      setFormStatus("normal");
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formStatusWatcher]);

  // const handleClick = (e: any) => {
  //   e.stopPropagation();
  // }

  return (
    <div className={`contact-form`}>
      <Grid>
        {props ? (
          <Row gap={16}>
            <Col size={12}>{props.title}</Col>
          </Row>
        ) : null}
        <form onSubmit={handleSubmit}>
          <Row gap={16}>
            <Col size={12}>
              <FormInput name="name" type="text" label="Imię i nazwisko" value={name} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setname(e.target.value)} required />
            </Col>
            <Col size={[6, 6, 12]}>
              <FormInput name="phone" type="text" label="Telefon" value={phone} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPhone(e.target.value)} required />
            </Col>
            <Col size={[6, 6, 12]}>
              <FormInput name="email" type="email" label="Email" value={email} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(e.target.value)} required />
            </Col>
            <Col size={12}>
              <FormInput name="message" type="textarea" label="Wiadomość" value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} required />
            </Col>
            <Col size={12}>
              <CheckBox handleChange={setIsRuleAccepted} isActive={isRuleAccepted}>
                Wyrażam zgodę na LOREM IPSUM
              </CheckBox>
            </Col>
            <Col size={12}>
              <CheckBox handleChange={setIsRodoAccepted} isActive={isRodoAccepted}>
                Wyrażam zgodę na LOREM IPSUM
              </CheckBox>
            </Col>
            <Col size={12}>
              <CheckBox handleChange={setPhoneAccepted} isActive={isPhoneAccepted}>
                Wyrażam zgodę na LOREM IPSUM
              </CheckBox>
            </Col>
            <Col size={12}>
              <CheckBox handleChange={setIsMarketingAccepted} isActive={isMarketingAccepted}>
                Wyrażam zgodę na LOREM IPSUM
              </CheckBox>
            </Col>
            <Col size={12}>
              <BtnCustom variant="fill" type="submit" disabled={formStatus === "pending"} className={formStatus === "success" ? "success" : formStatus === "fail" ? "fail" : ""}>
                <>
                  {formStatus === "normal" ? "WYŚLIJ I POBIERZ E-BOOK" : null}
                  {formStatus === "pending" ? "TRWA WYSYŁANIE" : null}
                  {formStatus === "success" ? "WYSŁANO POMYŚLNIE" : null}
                  {formStatus === "fail" ? "WYSTĄPIŁ PROBLEM PRZY WYSYŁCE" : null}
                </>
              </BtnCustom>
            </Col>
          </Row>
        </form>
      </Grid>
    </div>
  );
};

export default ContactForm;
