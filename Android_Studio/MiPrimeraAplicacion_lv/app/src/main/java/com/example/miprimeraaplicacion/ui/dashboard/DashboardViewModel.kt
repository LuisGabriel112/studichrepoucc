package com.example.miprimeraaplicacion.ui.dashboard

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class DashboardViewModel : ViewModel() {

    private val _dashboardText = MutableLiveData<String>().apply {
        value = "This is dashboard Fragment"
    }
    val dashboardText: LiveData<String> = _dashboardText
}