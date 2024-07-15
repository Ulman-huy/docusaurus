import OTPInput from "@site/src/components/OTPInput";
import { useState } from "react";

const OTPInputExample = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <OTPInput length={6} otp={otp} setOtp={setOtp} />
        <p style={{ marginTop: 8 }}>OTP: {otp}</p>
      </div>
    </div>
  );
};

export default OTPInputExample;
