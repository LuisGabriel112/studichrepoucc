package com.example.miprimeraaplicacion.ui.notifications

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class NotificationsViewModel : ViewModel() {

    private val _notificationsText = MutableLiveData<String>().apply {
        value = "This is notifications Fragment"
    }
    val notificationsText: LiveData<String> = _notificationsText
}