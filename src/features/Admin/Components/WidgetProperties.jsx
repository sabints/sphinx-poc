function WidgetProperties({ widgetName, properties }) {
    switch (widgetName) {
        case 'Profile':
            return <ProfileCard {...widget} />
        case 'Text':
            return <ProfileCard {...widget} />
        default:
            return <div></div>;
    }
}
export default WidgetProperties;