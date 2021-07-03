import React from 'react';


import './styles.scss'

//

function Album(
    { album }
) {
    return (
        <div className="album">
        <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />

        </div>
<p>
    {album.name}
</p>
        </div>
    )
}
export default Album;

