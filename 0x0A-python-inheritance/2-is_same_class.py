#!/usr/bin/python3
"""Module containing is_same_class method"""

def is_same_class(obj, a_class):
    """
    return true if the object is exactly an instance of the specified class
    return false otherwise
    """
    return type(obj) == a_class