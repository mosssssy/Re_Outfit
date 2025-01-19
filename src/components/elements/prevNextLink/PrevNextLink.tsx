import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./PrevNextLink.module.css";

interface PrevNextLinkProps {
  showBackButton?: boolean; // 戻るボタンを表示するか
  showNextButton?: boolean; // 次へボタンを表示するか
  onBackClick?: () => void; // 戻るボタンがクリックされた時の処理
  onNextClick?: () => void; // 次へボタンがクリックされた時の処理
}

const PrevNextLink: React.FC<PrevNextLinkProps> = ({
  showBackButton = true,
  showNextButton = true,
  onBackClick,
  onNextClick,
}) => {
  const [isBackVisible, setIsBackVisible] = useState(showBackButton);
  const [isNextVisible, setIsNextVisible] = useState(showNextButton);

  return (
    <div className={styles.container}>
      {isBackVisible && (
        <button onClick={onBackClick} className={styles.link}>
          <IoIosArrowBack size={24} />
          戻る
        </button>
      )}
      {isNextVisible && (
        <button onClick={onNextClick} className={styles.link}>
          次へ
          <IoIosArrowForward size={24} />
        </button>
      )}
    </div>
  );
};

export default PrevNextLink;
