import React from 'react';
import Album from '../Album';
import './styles.scss'
Albumlist.propTypes = {
    
};



// // export default Albumlist;



function Albumlist({ albumlist }) {
    return (
        <ul className="album-list">
{albumlist.map(album => (
    <li key={album.id}>
<Album album={album} />
    </li>
))}
        </ul>
    );
}


export default Albumlist;