import React from 'react';
import PropTypes from 'prop-types';

import CustomListItem from './customListItem';

const CustomList = props => {
    const {
        lists,
    } = props;

    const renderList = () => {
        console.log(lists);

        return (
            <div>
                {(lists || []).map((item, index) => {
                    return (
                        <CustomListItem key={`list-item-${index}`} listItem={item}/>
                    );
                })}
            </div>
        );
    };
    return (
        <div>
            { renderList() }
        </div>
    );
};

CustomList.propTypes = {
    lists: PropTypes.array,
};

CustomList.defaultProps = {};

export default CustomList;
