import React from 'react';

const Searchbox = ({SearchChange }) => {
        return (
                <div className='pa2'>
                        <input 
                                className='pa3 ba b--blue bg-lightest-blue'
                                type='search' 
                                placeholder='search for robots'
                                onChange={SearchChange}
                        />
                </div>
        );
}

export default Searchbox;