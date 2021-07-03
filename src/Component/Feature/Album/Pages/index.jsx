import React from 'react';
import AlbumList from '../Component/AlbumList/';
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumlist = [
{
    id: 1,
    name: 'Profile',
    thumbnailUrl: 'https://picsum.photos/id/237/536/354'
},
{
    id: 2,
    name: 'Exp',
    thumbnailUrl: 'https://picsum.photos/seed/picsum/536/354'

},
{
    id: 3,
    name: 'Passion',
    thumbnailUrl: 'https://picsum.photos/id/1084/536/354?grayscale'

    
},
    ];
    return (
        <div>
            <AlbumList albumlist={albumlist} />
           
          
        </div> 
    );
}




//



export default AlbumFeature;