import { ReactNode, useEffect, useState } from "react";

type Props = {
  open: boolean;
  onCancel?: () => void;
  children?: ReactNode;
  className?: string;
  maskClose?: boolean;
  btnClose?: boolean;
  width?: number | string;
};

const Modal: React.FC<Props> = ({
  open,
  onCancel,
  children,
  className,
  maskClose = true,
  btnClose = true,
  width = 300,
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setInit(open);
      if (open) {
        const scrollWidth =
          window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = scrollWidth + "px";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px";
      }
    }, 150);
    return () => clearTimeout(timmer);
  }, [open]);

  return (
    <>
      {init && (
        <div
          className={`modal__container ${
            open ? "modal__mask--show" : "modal__mask--hide"
          }`}
        >
          <div
            className="modal__mask"
            onClick={() => maskClose && onCancel && onCancel()}
          />
          <div
            className={`modal__main ${className} ${
              open ? "modal__show" : "modal__hide"
            }`}
            style={{ maxWidth: width }}
          >
            <div className="modal__content" style={{ maxWidth: width }}>
              {btnClose && (
                <span
                  onClick={() => onCancel && onCancel()}
                  className="modal__btn--close"
                >
                  <svg
                    width={24}
                    height={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#222831"
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>
                </span>
              )}
              <div className="modal__children">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
