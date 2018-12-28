import React from 'react';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

const override = css `
    display: block;
    margin: 0 auto;
    border-color: red;
`;

const Loader = () => (
    <div className='center'>
        <ClipLoader
            className={override}
        />
    </div>
)

export default Loader

