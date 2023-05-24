import React, { useState } from 'react';
function Project(props) {
    return (
        <div>
            <div class="card" style={{ width: '18rem' }}>
                <img src={props.image} className='card-img-top' alt='...' />
                <div class='card-body'>
                    <h5 class='card-title'>{props.title}</h5>
                    <p class='card-text'>{props.description}</p>
                    <a href={props.link} class='btn btn-primary'>Learn</a>
                </div>
            </div>
        </div>
    );
}
export default Project;