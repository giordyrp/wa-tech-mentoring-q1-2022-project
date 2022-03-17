import { createGlobalStyle } from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';

export default createGlobalStyle`
  html, body, #root {
    display: block;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #root {
    background-color: rgb(247, 248, 249);
    overflow-y: auto;
  }

  #root, textarea {
    font-family: 'Nunito Sans', sans-serif;
  }

  #root * {
    box-sizing: border-box;
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .image-gallery-slides {
    border-radius: 10px;
  }

  .image-gallery-thumbnail {
    border-radius: 12px;
  }

  .image-gallery-thumbnail-image {
    border-radius: 7px;
    object-fit: cover;
    height: 50px;
  }

  .image-gallery-image {
    object-fit: cover !important;
    height: 400px;
  }

  .image-gallery-left-nav svg, .image-gallery-right-nav svg{
    height: 70px !important;
  }

  .image-gallery-thumbnail.active, .image-gallery-thumbnail:focus, .image-gallery-thumbnail:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .image-gallery-icon:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
