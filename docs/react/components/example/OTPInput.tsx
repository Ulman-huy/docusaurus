import { useRef } from "react";

type Props = {
  length: number;
  otp: (number | string)[];
  setOtp: (opt: (number | string)[]) => void;
  size?: number;
};

const OTPInput: React.FC<Props> = ({ length = 6, otp, setOtp, size = 30 }) => {
  const otpBoxReference = useRef<any[]>([]);

  const handleChange = (value: string, index: number) => {
    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < length - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (e: any, index: number) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < length - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  if (!otpBoxReference) {
    return <></>;
  }

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
          ref={(reference) => (otpBoxReference.current[index] = reference)}
          style={{
            width: size,
            height: size,
            textAlign: "center",
            border: "1px solid #ddd",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
