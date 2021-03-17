import React from 'react'
import {List, ListItemText} from '@material-ui/core';

export default function Category({post}) {
    return (
        <List component="nav" aria-label="main mailbox folders">
                    {post.category.map(item=> <ListItemText primary={item} />)}
        </List>
    )
}
