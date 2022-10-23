import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const PlasesV = ({ id, go, fetchedUser }) => {

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
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
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
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
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
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://gorodarus.ru/images/votkinsk/votkinsk1.jpg"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
        </div>
    )
};

export default PlasesV;