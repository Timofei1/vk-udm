import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Link, CardScroll, HorizontalCell, Header, ModalRoot, SplitLayout, ModalPage, PanelHeaderButton, ModalPageHeader, ActionSheet, ActionSheetItem, Tabs, HorizontalScroll, Button, Group, Cell, Div, SimpleCell, TabsItem, Separator } from '@vkontakte/vkui';
import { Icon28LocationOutline, Icon24Cancel, Icon20CheckCircleOn } from '@vkontakte/icons';

const EventsG = ({ id, go, fetchedUser }) => {

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
                <Header aside={<Link>Показать все</Link>}>Театральные постановки</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
            <Group header={
                <Header aside={<Link>Показать все</Link>}>Концерты</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
            <Group header={
                <Header aside={<Link>Показать все</Link>}>Выставки</Header>
            }>
                <CardScroll size="false">
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>
                    <HorizontalCell size="l" header="Название" subtitle="Примечание">
                        <img
                            style={largeImageStyles}
                            src="https://avatars.mds.yandex.net/get-afishanew/29882/900fe89d4b8c3c6508e157bd69b4dff3/s380x220"
                        />
                    </HorizontalCell>

                </CardScroll>
            </Group>
        </div>
    )
};

export default EventsG;