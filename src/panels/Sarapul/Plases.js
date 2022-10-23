import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const PlasesS = ({ id, go, fetchedUser }) => {

    const largeImageStyles = {
		width: 220,
		height: 124,
		borderRadius: 8,
		border: "1px solid var(--vkui--color_image_placeholder_alpha)",
		objectFit: "cover",
	};

    return (
        <div>
            <Group header={
                <Header aside={<Link>Показать все</Link>}>Достопримечательности</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
            <Group header={
                <Header aside={<Link>Показать все</Link>}>Музеи</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
            <Group header={
                <Header aside={<Link>Показать все</Link>}>Развлечения</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg/340px-%D0%94%D0%BE%D0%BC_%D0%91%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE%D1%81%D0%BB%D0%B5_%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B2%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
        </div>
    )
};

export default PlasesS;