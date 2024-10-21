function markAllAsRead() {
    var notifications = document.querySelectorAll('.notification.unread');
    for (var i = 0; i < notifications.length; i++) {
        notifications[i].classList.remove('unread');
        notifications[i].classList.add('read');
    }
}