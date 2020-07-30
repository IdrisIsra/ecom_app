import React from 'react';
import styled from 'styled-components'
import MenuItem from '../menu-item/menu-item.component'
import { createStructuredSelector } from 'reselect'

import { selectSections } from '../../redux/directory/directory.selectors'

import { connect } from 'react-redux';

const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Directory = ({ sections }) => (
            <DirectoryContainer>
                {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
                ))}

            </DirectoryContainer>
)


const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);