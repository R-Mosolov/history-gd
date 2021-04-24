import React from 'react';
import { DEFAULT_TABLE_TITLE, DEFAULT_PICTURE_TITLE } from '../constants';

/**
 * Create abstract OLOO class
 */
const Attachment = {
  // Create setters
  setType: function (type) {
    return (this.type = type);
  },
  setNumber: function (number) {
    return (this.number = number);
  },
  setTitle: function (title) {
    return (this.title = title);
  },
  setHTMLStructure: function (HTMLStructure) {
    return (this.HTMLStructure = HTMLStructure);
  },
  // Create getters
  getType: function () {
    return this.type;
  },
  getNumber: function () {
    return this.number;
  },
  getTitle: function () {
    return this.title;
  },
  getHTMLStructure: function () {
    return this.HTMLStructure;
  },
};

/**
 * Create Table OLOO class
 */
// Inherit main logic from abstract OLOO class
const TableAttachment = Object.create(Attachment);
// Create setters
TableAttachment.setTableType = function () {
  return this.setType('Таблица');
};
TableAttachment.setTableNumber = function (number) {
  return this.setNumber(number);
};
TableAttachment.setTableTitle = function (title) {
  return this.setTitle(title || DEFAULT_TABLE_TITLE);
};
TableAttachment.setTableColsCount = function (colsCount) {
  return (this.colsCount = colsCount || 2);
};
TableAttachment.setTableRowsCount = function (rowsCount) {
  return (this.rowsCount = rowsCount || 2);
};
TableAttachment.setTableHTMLStructure = function (callback) {
  return this.setHTMLStructure(
    <div className="editor__content_attachment">
      <p className="attachment__number">{`${this.getTableType()} ${this.getTableNumber()}`}</p>
      <p className="attachment__title">{this.getTableTitle()}</p>
      <table className="attachment__container">
        {callback(this.getTableColsCount(), this.getTableRowsCount())}
      </table>
    </div>
  );
};
// Create getters
TableAttachment.getTableType = function () {
  return this.type;
};
TableAttachment.getTableNumber = function () {
  return this.number;
};
TableAttachment.getTableTitle = function () {
  return this.title;
};
TableAttachment.getTableColsCount = function () {
  return this.colsCount;
};
TableAttachment.getTableRowsCount = function () {
  return this.rowsCount;
};
TableAttachment.getTableHTMLStructure = function () {
  return this.HTMLStructure;
};

/**
 * Create Picture OLOO class
 */
// Inherit main logic from abstract OLOO class
const PictureAttachment = Object.create(Attachment);
// Create setters
PictureAttachment.setPictureType = function () {
  return this.setType('Рисунок');
};
PictureAttachment.setPictureNumber = function (number) {
  return this.setNumber(number);
};
PictureAttachment.setPictureTitle = function (title) {
  return this.setTitle(title || DEFAULT_PICTURE_TITLE);
};
PictureAttachment.setPictureSrc = function (pictureSrc) {
  return (this.pictureSrc =
    pictureSrc ||
    'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/' +
      'master/w_2560%2Cc_limit/Transpo_G70_TA-518126.jpg');
};
PictureAttachment.setPictureHTMLStructure = function () {
  return this.setHTMLStructure(
    <div className="editor__content_attachment">
      <p className="attachment__number">{`${this.getPictureType()} ${this.getPictureNumber()}`}</p>
      <p className="attachment__title">{this.getPictureTitle()}</p>
      <img src={this.getPictureSrc()} style={{ maxWidth: 100 + '%' }} />
    </div>
  );
};
// Create getters
PictureAttachment.getPictureType = function () {
  return this.type;
};
PictureAttachment.getPictureNumber = function () {
  return this.number;
};
PictureAttachment.getPictureTitle = function () {
  return this.title;
};
PictureAttachment.getPictureSrc = function () {
  return this.pictureSrc;
};
PictureAttachment.getPictureHTMLStructure = function () {
  return this.HTMLStructure;
};

export { Attachment, TableAttachment, PictureAttachment };
