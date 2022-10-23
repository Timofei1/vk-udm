import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Hotels = ({ id, go, fetchedUser }) => {
    return(
	<Panel id={id}>
		<PanelHeader>Жильё</PanelHeader>
		<Group header={<Header mode="secondary">Тут что то будет...</Header>}>
		</Group>
	</Panel>

)};

export default Hotels;