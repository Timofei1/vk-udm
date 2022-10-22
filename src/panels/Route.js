import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Route = ({ id, go, fetchedUser }) => {
    return(

	<Panel id={id}>
		<PanelHeader>Маршруты</PanelHeader>
		<Group header={<Header mode="secondary">Тут что то будет...</Header>}>
		</Group>
	</Panel>

)};

export default Route;