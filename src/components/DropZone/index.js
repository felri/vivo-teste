import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css'


function FileSvg(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <g fill="#6b6b6b">
        <path d="M464.217 114.566L352.913 3.261A11.086 11.086 0 00345.043 0H77.913c-18.41 0-33.391 14.982-33.391 33.391v445.217c0 18.41 14.982 33.391 33.391 33.391h356.174c18.399 0 33.38-14.97 33.391-33.369V122.435c0-2.95-1.168-5.788-3.261-7.869zm-330.652 18.999V89.043h178.087v44.522H133.565zm311.652 345.044c0 6.144-4.986 11.13-11.13 11.13H77.913c-6.133 0-11.13-4.986-11.13-11.13V33.391c0-6.133 4.998-11.13 11.13-11.13h233.739v44.522H122.435c-6.144 0-11.13 4.986-11.13 11.13v66.783c0 6.144 4.986 11.13 11.13 11.13h322.783v322.783zm0-345.044H333.913V22.261h6.522l104.782 104.782v6.522z" />
        <path d="M122.435 222.609H256c6.144 0 11.13-4.986 11.13-11.13s-4.986-11.13-11.13-11.13H122.435c-6.144 0-11.13 4.986-11.13 11.13s4.986 11.13 11.13 11.13zM122.435 356.174H256c6.144 0 11.13-4.975 11.13-11.13 0-6.155-4.986-11.13-11.13-11.13H122.435c-6.144 0-11.13 4.975-11.13 11.13-.001 6.155 4.986 11.13 11.13 11.13zM111.304 278.261c0 6.155 4.986 11.13 11.13 11.13h267.13a11.12 11.12 0 0011.13-11.13 11.12 11.12 0 00-11.13-11.13h-267.13c-6.143-.001-11.13 4.975-11.13 11.13zM389.565 400.696h-267.13c-6.144 0-11.13 4.975-11.13 11.13s4.986 11.13 11.13 11.13h267.13c6.155 0 11.13-4.975 11.13-11.13s-4.975-11.13-11.13-11.13z" />
      </g>
    </svg>
  )
}

export default ({handleUploadJson}) => {
  const onDrop = useCallback(acceptedFiles => {
    handleUploadJson({jsonFile: acceptedFiles})
  }, [handleUploadJson])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
    <div className="dropzone-container" {...getRootProps()}>
      <div className="droparea-container">
        <input className="input-dropzone" {...getInputProps()} />
        <FileSvg width='100px' height='100px' fill="#6b6b6b"/>
        {
          isDragActive ?
            <p className="text-dropzone">Arraste o arquivo JSON aqui...</p> :
            <p className="text-dropzone">Arraste o arquivo JSON, ou clique aqui para selecionar</p>
        }
      </div>
    </div>
    </>
  )
}