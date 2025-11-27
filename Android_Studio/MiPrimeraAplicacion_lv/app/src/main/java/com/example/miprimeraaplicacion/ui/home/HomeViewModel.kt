package com.example.miprimeraaplicacion.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class HomeViewModel : ViewModel() {

    private val _welcomeText = MutableLiveData<String>().apply {
        value = "This is home Fragment"
    }
    val welcomeText: LiveData<String> = _welcomeText
}