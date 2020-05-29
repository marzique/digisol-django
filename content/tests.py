from django.test import TestCase

# Create your tests here.


class MainPageContentTestCase(TestCase):
    def setUp(self):
        self.client = None
    
    def test_test(self):
        self.assertEqual('', '')