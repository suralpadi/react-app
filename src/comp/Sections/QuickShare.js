import React from "react";

const QuickShare = () => {
  return (
    <div class="share-buttons">
      <a  rel="noreferrer" target="_blank" href="https://wa.me/+971588725957?text=hi" class="share-button">
        <div class="share-button-secondary">
          <div class="share-button-secondary-content">Chat on whatsapp</div>
        </div>
        <div class="share-button-primary whatsapp">
          <i class="share-button-icon fa fa-whatsapp"></i>
        </div>
      </a>
    </div>
  );
};

export default QuickShare;
