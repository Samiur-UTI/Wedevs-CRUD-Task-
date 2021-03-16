import React from 'react'
import {List, ListItemText} from '@material-ui/core';

export default function Category({category}) {
    return (
        <List component="nav" aria-label="main mailbox folders">
                    {category.map(element =>   <ListItemText primary={element} /> )}
        </List>
    )
}
