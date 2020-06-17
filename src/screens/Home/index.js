import React from 'react';
import DropZone from 'components/DropZone'
import arrayTransform from 'utils/arrayTransform'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './styles.css';

export default () => {
  const [open, setOpen] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [result, setResult] = React.useState(undefined)

  const handleUploadJson = ({jsonFile}) => {
    const reader = new FileReader();
    reader.onload = (function(e) {
      const jsonObj = JSON.parse(e.target.result);
      const result = arrayTransform({array: jsonObj});
      if(result) {
        setOpen(true)
        setResult(result)
      }
      else {
        setError(true)
        setResult(undefined)
      }
    });
    reader.readAsText(jsonFile[0]);
  }

  return (
    <>
      <DropZone handleUploadJson={handleUploadJson}/>
      <Modal open={open} onClose={() => setOpen(false)} center>
        {
          result && 
          <div className="container-result"><pre>{JSON.stringify(result, null, 2) }</pre></div>
        }
      </Modal>
      <Modal open={error} onClose={() => setError(false)} center>
        <div className="container-error">
          <h2>Algo deu errado, verifique o arquivo enviado</h2>
        </div>
      </Modal>
    </>
  );
}
