class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height
    
    def print_area(self):
        print('Area: ' + str(self.get_area()) + '\n')

    def print_coordinates(self):
        x_endpoint = self.starting_point.x + self.width
        y_endpoint = self.starting_point.y + self.height
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis: ' + str(x_endpoint))
        print('End Point Y-Axis: ' + str(y_endpoint))


def create_rectangle(x, y, width, height):
    starting_point = Point(x, y)
    return Rectangle(starting_point, width, height)

rectangle = create_rectangle(50, 100, 90, 10)
rectangle.print_area()
rectangle.print_coordinates()
