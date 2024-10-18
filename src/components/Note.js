import { MdDeleteForever, MdContentCopy } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
  const handleCopyNote = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Note copied to clipboard!');
        // Optionally, show a notification or change the icon color briefly
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className='note' id={id.toString()}>
      <p className='note-text'>{text.replace(/  +/g, ' ')}</p>
      <div className='note-footer'>
        <small>{date}</small>
        <MdContentCopy
          className='copy-icon'
          size='1.5em'
          onClick={handleCopyNote}
        />
        <MdDeleteForever
          className='delete-icon'
          size='1.5em'
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;

